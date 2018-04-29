---
sidebarDepth: 2
next: ./hello-world
---

# 前端文件上传总结

## 0.图片上传思路

 > 1. 监听一个input(type=‘file’)的onchange事件，这样获取到文件file；
 > 1. 将file转成dataUrl;
 > 1. 然后根据dataUrl利用canvas绘制图片压缩，然后再转成新的dataUrl；
 > 1. 再把dataUrl转成Blob；
 > 1. 把Blob append进FormData中；
 > 1. xhr实现上传。

## 1.基于H5的File API和input实现

H5的File API实现代码如下:

```javascript
function uploadAndSubmit() {
  var form = document.forms["demoForm"];
  if (form["file"].files.length > 0) { // 获取file文件对象 
    var file = form["file"].files[0]; // try sending 
    var reader = new FileReader();
    reader.onloadstart = function() {
      // 这个事件在读取开始时触发 
      console.log("onloadstart");
      document.getElementById("bytesTotal").textContent = file.size;
    }
    reader.onprogress = function(p) {
      // 这个事件在读取进行中定时触发 
      console.log("onprogress");
      document.getElementById("bytesRead").textContent = p.loaded;
    }
    reader.onload = function() {
      // 这个事件在读取成功结束后触发 
      console.log("load complete");
    }
    reader.onloadend = function() {
      // 这个事件在读取结束后，无论成功或者失败都会触发 
      if (reader.error) { console.log(reader.error); } else {
        document.getElementById("bytesRead").textContent = file.size;
        // 构造 XMLHttpRequest 对象，发送文件 Binary 数据 
        var xhr = new XMLHttpRequest();
        xhr.open( /* method */ "POST", /* target url */ "upload.jsp?fileName=" + file.name /*, async, default to true */ );
        // 设置MimeType为application/octet-stream, 即采用binary二进制传递文件
        xhr.overrideMimeType("application/octet-stream");
        xhr.sendAsBinary(reader.result);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              console.log("upload complete");
              console.log("response: " + xhr.responseText);
            }
          }
        }
      }
    }
    reader.readAsBinaryString(file);
  } else {
    alert("Please choose a file.");
  }
}
```

## 2.FormData

> 通过FormData对象可以组装一组用 XMLHttpRequest发送请求的键/值对。它可以更灵活方便的发送表单数据，因为可以独立于表单使用。如果你把表单的编码类型设置为multipart/form-data ，则通过FormData传输的数据格式和表单通过submit() 方法传输的数据格式相同。

## 3.base64

> Base64是一种基于64个可打印字符来表示二进制数据的表示方法。 由于2的6次方等于64，所以每6个位元为一个单元，对应某个可打印字符。 三个字节有24个位元，对应于4个Base64单元，即3个字节可表示4个可打印字符
> 就是用一段字符串来描述一个二进制数据，所以很多时候也可以使用base64方式上传

## 4.Blob对象(File对象基于此)

>  一个 Blob对象表示一个不可变的, 原始数据的类似文件对象。Blob表示的数据不一定是一个JavaScript原生格式。 File 接口基于Blob，继承 blob功能并将其扩展为支持用户系统上的文件。
>  简单说Blob就是一个二进制对象，是原生支持的

## 5.webuploader插件
[Github: https://github.com/fex-team/webuploader](https://github.com/fex-team/webuploader)

## 6.兼容性

>  1.  部分安卓微信浏览器无法触发`onchange`事件（第一步就特么遇到问题）
    这其实安卓微信的一个遗留问题。 [查看讨论](https://www.zhihu.com/question/21452742) 解决办法也很简单：`input`标签 `<input type=“file" name="image" accept="image/gif, image/jpeg, image/png”>`要写成`<input type="file" name="image" accept=“image/*”>`就没问题了。
>  2.  部分安卓微信不支持`Blob`对象
>  3.  部分`Blob`对象`append`进`FormData`中出现问题
>  4.  iOS 8不支持`new File Constructor`，但是支持`input`里的`file`对象。
>  5.  iOS 上经过压缩后的图片可以上传成功 但是size是0 无法打开。
>  6.  部分手机出现图片上传转换问题，[请移步](https://github.com/xiangpaopao/blog/issues/7)。
>  7.  安卓手机不支持多选，原因在于multiple属性根本就不支持。
>  8.  多张图片转base64时候卡顿，因为调用了cpu进行了计算。
>  9.  上传图片可以使用base64上传或者formData上传

## 7.修改后方案
[图片上传失败...(image-a42230-1524582249312)]

## 8.最终完善上传代码

```javascript
// html文件
<input type="file" name="image" accept=“image/*” onchange='handleInputChange'>
```
```
// js文件
// 全局对象，不同function使用传递数据
const imgFile = {};

function handleInputChange (event) {
    // 获取当前选中的文件
    const file = event.target.files[0];
    const imgMasSize = 1024 * 1024 * 10; // 10MB

    // 检查文件类型
    if(['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0){
        // 自定义报错方式
        // Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);
        return;
    }

    // 文件大小限制
    if(file.size > imgMasSize ) {
        // 文件大小自定义限制
        // Toast.error("文件大小不能超过10MB！", 2000, undefined, false);
        return;
    }

    // 判断是否是ios
    if(!!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        // iOS
        transformFileToFormData(file);
        return;
    }

    // 图片压缩之旅
    transformFileToDataUrl(file);
}
// 将File append进 FormData
function transformFileToFormData (file) {
    const formData = new FormData();
    // 自定义formData中的内容
    // type
    formData.append('type', file.type);
    // size
    formData.append('size', file.size || "image/jpeg");
    // name
    formData.append('name', file.name);
    // lastModifiedDate
    formData.append('lastModifiedDate', file.lastModifiedDate);
    // append 文件
    formData.append('file', file);
    // 上传图片
    uploadImg(formData);
}
// 将file转成dataUrl
function transformFileToDataUrl (file) {
    const imgCompassMaxSize = 200 * 1024; // 超过 200k 就压缩

    // 存储文件相关信息
    imgFile.type = file.type || 'image/jpeg'; // 部分安卓出现获取不到type的情况
    imgFile.size = file.size;
    imgFile.name = file.name;
    imgFile.lastModifiedDate = file.lastModifiedDate;

    // 封装好的函数
    const reader = new FileReader();

    // file转dataUrl是个异步函数，要将代码写在回调里
    reader.onload = function(e) {
        const result = e.target.result;

        if(result.length < imgCompassMaxSize) {
            compress(result, processData, false );    // 图片不压缩
        } else {
            compress(result, processData);            // 图片压缩
        }
    };

    reader.readAsDataURL(file);
}
// 使用canvas绘制图片并压缩
function compress (dataURL, callback, shouldCompress = true) {
    const img = new window.Image();

    img.src = dataURL;

    img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let compressedDataUrl;

        if(shouldCompress){
            compressedDataUrl = canvas.toDataURL(imgFile.type, 0.2);
        } else {
            compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
        }

        callback(compressedDataUrl);
    }
}

function processData (dataURL) {
    // 这里使用二进制方式处理dataUrl
    const binaryString = window.atob(dataUrl.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const intArray = new Uint8Array(arrayBuffer);
    const imgFile = this.imgFile;

    for (let i = 0, j = binaryString.length; i < j; i++) {
        intArray[i] = binaryString.charCodeAt(i);
    }

    const data = [intArray];

    let blob;

    try {
        blob = new Blob(data, { type: imgFile.type });
    } catch (error) {
        window.BlobBuilder = window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder;
        if (error.name === 'TypeError' && window.BlobBuilder){
            const builder = new BlobBuilder();
            builder.append(arrayBuffer);
            blob = builder.getBlob(imgFile.type);
        } else {
            // Toast.error("版本过低，不支持上传图片", 2000, undefined, false);
            throw new Error('版本过低，不支持上传图片');
        }
    }

    // blob 转file
    const fileOfBlob = new File([blob], imgFile.name);
    const formData = new FormData();

    // type
    formData.append('type', imgFile.type);
    // size
    formData.append('size', fileOfBlob.size);
    // name
    formData.append('name', imgFile.name);
    // lastModifiedDate
    formData.append('lastModifiedDate', imgFile.lastModifiedDate);
    // append 文件
    formData.append('file', fileOfBlob);

    uploadImg(formData);
}

// 上传图片
uploadImg (formData) {
    const xhr = new XMLHttpRequest();

    // 进度监听
    xhr.upload.addEventListener('progress', (e)=>{console.log(e.loaded / e.total)}, false);
    // 加载监听
    // xhr.addEventListener('load', ()=>{console.log("加载中");}, false);
    // 错误监听
    xhr.addEventListener('error', ()=>{Toast.error("上传失败！", 2000, undefined, false);}, false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const result = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                // 上传成功
                

            } else {
                // 上传失败
            }
        }
    };
    xhr.open('POST', '/uploadUrl' , true);
    xhr.send(formData);
}
```

## 9.多图并发上传

多张图片上传方式有三种：

> 1. 图片队列一张一张上传
> 1. 图片队列并发全部上传
> 1. 图片队列并发上传X个，其中一个返回了结果直接触发下一个上传，保证最多有X个请求。

一张一张上传好解决，但是问题是上传事件太长，体验不佳；多张图片全部上传事件变短了，但是并发量太大，很可能出现问题；最后这个并发上传X个，体验最佳。

### 9.1并发上传实现

最后我们确定X = 3或者4。比如说上传9张图片，第一次上传个3个，其中一个请求回来了，立即去上传第四个，下一个回来上传第5个，以此类推。
这里我使用es6的generator函数来实现的，定义一个函数，返回需要上传的数组：

```javascript
*uploadGenerator (uploadQueue) {
        /**
         * 多张图片并发上传控制规则
         * 上传1-max数量的图片
         * 设置一个最大上传数量
         * 保证最大只有这个数量的上传请求
         *
         */

        // 最多只有三个请求在上传
        const maxUploadSize = 3;

        if(uploadQueue.length > maxUploadSize){

            const result = [];

            for(let i = 0; i < uploadQueue.length; i++){
                // 第一次return maxUploadSize数量的图片
                if(i < maxUploadSize){
                    result.push(uploadQueue[i]);

                    if(i === maxUploadSize - 1){
                        yield result;
                    }
                } else {
                    yield [uploadQueue[i]];
                }
            }

        } else {
            yield uploadQueue.map((item)=>(item));
        }
    }
```

调用:

```javascript
// 通过该函数获取每次要上传的数组
        this.uploadGen = this.uploadGenerator(uploadQueue);
        // 第一次要上传的数量
        const firstUpload = this.uploadGen.next();


        // 真正开始上传流程
        firstUpload.value.map((item)=>{
            /**
             * 图片上传分成5步
             * 图片转dataUrl
             * 压缩
             * 处理数据格式
             * 准备数据上传
             * 上传
             *
             * 前两步是回调的形式 后面是同步的形式
             */
            this.transformFileToDataUrl(item, this.compress, this.processData);
        });
```

### 9.2改进单张图片上传

图片上传分成5步，

> 1. 图片转dataUrl
> 1. 压缩
> 1. 处理数据格式
> 1. 准备数据上传
> 1. 上传

这里面前两个是回调的形式，最后一个是异步形式。无法写成正常函数一个调用一个；而且各个function之间需要共享一些数据，之前把这个数据挂载到this.imgFile上了，但是这次是并发，一个对象没法满足需求了，改成数组也有很多问题。

所以这次方案是：第一步创建一个要上传的对象，每次都通过参数交给下一个方法，直到最后一个方法上传。并且通过回调的方式，将各个步骤串联起来

完整代码:

```javascript
import React from 'react'
import classNames from 'classnames'
import Touchable from 'rc-touchable'
import Figure from './Figure'
import Toast from '../../../Feedback/Toast/components/Toast'
import '../style/index.scss'

// 统计img总数 防止重复
let imgNumber = 0;

// 生成唯一的id
const getUuid = () => {
    return "img-" + new Date().getTime() + "-" + imgNumber++;
};

class Uploader extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            imgArray: [] // 图片已上传 显示的数组
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.compress = this.compress.bind(this);
        this.processData = this.processData.bind(this);
    }
    componentDidMount () {
        // 判断是否有初始化的数据传入
        const {data} = this.props;

        if(data && data.length > 0){
            this.setState({imgArray: data});
        }
    }
    handleDelete(id) {
        this.setState((previousState)=>{
            previousState.imgArray = previousState.imgArray.filter((item)=>(item.id !== id));
            return previousState;
        });
    }
    handleProgress (id, e) {
        // 监听上传进度 操作DOM 显示进度
        const number = Number.parseInt((e.loaded / e.total) * 100) + "%";
        const text = document.querySelector('#text-'+id);
        const progress = document.querySelector('#progress-'+id);

        text.innerHTML = number;
        progress.style.width = number;
    }
    handleUploadEnd (data, status) {
        // 准备一条标准数据
        const _this = this;
        const obj = {id: data.uuid, imgKey: '', imgUrl: '', name: data.file.name, dataUrl: data.dataUrl, status: status};

        // 更改状态
        this.setState((previousState)=>{
            previousState.imgArray = previousState.imgArray.map((item)=>{
                if(item.id === data.uuid){
                    item = obj;
                }

                return item;
            });
            return previousState;
        });

        // 上传下一个
        const nextUpload = this.uploadGen.next();
        if(!nextUpload.done){
            nextUpload.value.map((item)=>{
                _this.transformFileToDataUrl(item, _this.compress, _this.processData);
            });
        }
    }
    handleInputChange (event) {
        const {typeArray, max, maxSize} = this.props;
        const {imgArray} = this.state;
        const uploadedImgArray = []; // 真正在页面显示的图片数组
        const uploadQueue = []; // 图片上传队列 这个队列是在图片选中到上传之间使用的 上传完成则清除

        // event.target.files是个类数组对象 需要转成数组方便处理
        const selectedFiles = Array.prototype.slice.call(event.target.files).map((item)=>(item));

        // 检查文件个数 页面显示的图片个数不能超过限制
        if(imgArray.length + selectedFiles.length > max){
            Toast.error('文件数量超出最大值', 2000, undefined, false);
            return;
        }

        let imgPass = {typeError: false, sizeError: false};

        // 循环遍历检查图片 类型、尺寸检查
        selectedFiles.map((item)=>{
            // 图片类型检查
            if(typeArray.indexOf(item.type.split('/')[1]) === -1){
                imgPass.typeError = true;
            }
            // 图片尺寸检查
            if(item.size > maxSize * 1024){
                imgPass.sizeError = true;
            }

            // 为图片加上位移id
            const uuid = getUuid();
            // 上传队列加入该数据
            uploadQueue.push({uuid: uuid, file: item});
            // 页面显示加入数据
            uploadedImgArray.push({ // 显示在页面的数据的标准格式
                id: uuid, // 图片唯一id
                dataUrl: '', // 图片的base64编码
                imgKey: '', // 图片的key 后端上传保存使用
                imgUrl: '', // 图片真实路径 后端返回的
                name: item.name, // 图片的名字
                status: 1 // status表示这张图片的状态 1：上传中，2上传成功，3：上传失败
            });
        });

        // 有错误跳出
        if(imgPass.typeError){
            Toast.error('不支持文件类型', 2000, undefined, false);
            return;
        }

        if(imgPass.sizeError){
            Toast.error('文件大小超过限制', 2000, undefined, false);
            return;
        }

        // 没错误准备上传
        // 页面先显示一共上传图片个数
        this.setState({imgArray: imgArray.concat(uploadedImgArray)});

        // 通过该函数获取每次要上传的数组
        this.uploadGen = this.uploadGenerator(uploadQueue);
        // 第一次要上传的数量
        const firstUpload = this.uploadGen.next();


        // 真正开始上传流程
        firstUpload.value.map((item)=>{
            /**
             * 图片上传分成5步
             * 图片转dataUrl
             * 压缩
             * 处理数据格式
             * 准备数据上传
             * 上传
             *
             * 前两步是回调的形式 后面是同步的形式
             */
            this.transformFileToDataUrl(item, this.compress, this.processData);
        });
    }
    *uploadGenerator (uploadQueue) {
        /**
         * 多张图片并发上传控制规则
         * 上传1-max数量的图片
         * 设置一个最大上传数量
         * 保证最大只有这个数量的上传请求
         *
         */

        // 最多只有三个请求在上传
        const maxUploadSize = 3;

        if(uploadQueue.length > maxUploadSize){

            const result = [];

            for(let i = 0; i < uploadQueue.length; i++){
                // 第一次return maxUploadSize数量的图片
                if(i < maxUploadSize){
                    result.push(uploadQueue[i]);

                    if(i === maxUploadSize - 1){
                        yield result;
                    }
                } else {
                    yield [uploadQueue[i]];
                }
            }

        } else {
            yield uploadQueue.map((item)=>(item));
        }
    }
    transformFileToDataUrl (data, callback, compressCallback) {
        /**
         * 图片上传流程的第一步
         * @param data file文件 该数据会一直向下传递
         * @param callback 下一步回调
         * @param compressCallback 回调的回调
         */
        const {compress} = this.props;
        const imgCompassMaxSize = 200 * 1024; // 超过 200k 就压缩

        // 封装好的函数
        const reader = new FileReader();

        // ⚠️ 这是个回调过程 不是同步的
        reader.onload = function(e) {
            const result = e.target.result;
            data.dataUrl = result;

            if(compress && result.length > imgCompassMaxSize){
                data.compress = true;

                callback(data, compressCallback); // 图片压缩
            } else {
                data.compress = false;

                callback(data, compressCallback); // 图片不压缩
            }
        };

        reader.readAsDataURL(data.file);
    }
    compress (data, callback) {
        /**
         * 压缩图片
         * @param data file文件 数据会一直向下传递
         * @param callback 下一步回调
         */
        const {compressionRatio} = this.props;
        const imgFile = data.file;
        const img = new window.Image();

        img.src = data.dataUrl;

        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            let compressedDataUrl;

            if(data.compress){
                compressedDataUrl = canvas.toDataURL(imgFile.type, (compressionRatio / 100));
            } else {
                compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
            }

            data.compressedDataUrl = compressedDataUrl;

            callback(data);
        }
    }
    processData (data) {
        // 为了兼容性 处理数据
        const dataURL = data.compressedDataUrl;
        const imgFile = data.file;
        const binaryString = window.atob(dataURL.split(',')[1]);
        const arrayBuffer = new ArrayBuffer(binaryString.length);
        const intArray = new Uint8Array(arrayBuffer);

        for (let i = 0, j = binaryString.length; i < j; i++) {
            intArray[i] = binaryString.charCodeAt(i);
        }

        const fileData = [intArray];

        let blob;

        try {
            blob = new Blob(fileData, { type: imgFile.type });
        } catch (error) {
            window.BlobBuilder = window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder;
            if (error.name === 'TypeError' && window.BlobBuilder){
                const builder = new BlobBuilder();
                builder.append(arrayBuffer);
                blob = builder.getBlob(imgFile.type);
            } else {
                throw new Error('版本过低，不支持上传图片');
            }
        }

        data.blob = blob;
        this.processFormData(data);
    }
    processFormData (data) {
        // 准备上传数据
        const formData = new FormData();
        const imgFile = data.file;
        const blob = data.blob;

        // type
        formData.append('type', blob.type);
        // size
        formData.append('size', blob.size);
        // append 文件
        formData.append('file', blob, imgFile.name);

        this.uploadImg(data, formData);
    }
    uploadImg (data, formData) {
        // 开始发送请求上传
        const _this = this;
        const xhr = new XMLHttpRequest();
        const {uploadUrl} = this.props;

        // 进度监听
        xhr.upload.addEventListener('progress', _this.handleProgress.bind(_this, data.uuid), false);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 201) {
                    // 上传成功
                    _this.handleUploadEnd(data, 2);
                } else {
                    // 上传失败
                    _this.handleUploadEnd(data, 3);
                }
            }
        };

        xhr.open('POST', uploadUrl , true);
        xhr.send(formData);
    }
    getImagesListDOM () {
        // 处理显示图片的DOM
        const {max} = this.props;
        const _this = this;
        const result = [];
        const uploadingArray = [];
        const imgArray = this.state.imgArray;

        imgArray.map((item)=>{
            result.push(
                <Figure key={item.id} {...item} onDelete={_this.handleDelete.bind(_this)} />
            );

            // 正在上传的图片
            if(item.status === 1){
                uploadingArray.push(item);
            }
        });

        // 图片数量达到最大值
        if(result.length >= max ) return result;

        let onPress = ()=>{_this.refs.input.click();};

        //  或者有正在上传的图片的时候 不可再上传图片
        if(uploadingArray.length > 0) {
            onPress = undefined;
        }

        // 简单的显示文案逻辑判断
        let text = '上传图片';

        if(uploadingArray.length > 0){
            text = (imgArray.length - uploadingArray.length) + '/' + imgArray.length;
        }

        result.push(
            <Touchable
                key="add"
                activeClassName={'zby-upload-img-active'}
                onPress={onPress}
            >
                <div className="zby-upload-img">
                    <span key="icon" className="fa fa-camera" />
                    <p className="text">{text}</p>
                </div>
            </Touchable>
        );

        return result;
    }
    render () {
        const imagesList = this.getImagesListDOM();
            
        return (
            <div className="zby-uploader-box">
                {imagesList}
                <input ref="input" type="file" className="file-input" name="image" accept="image/*" multiple="multiple" onChange={this.handleInputChange} />
            </div>
        )
    }
}

Uploader.propTypes = {
    uploadUrl: React.PropTypes.string.isRequired, // 图上传路径
    compress: React.PropTypes.bool, // 是否进行图片压缩
    compressionRatio: React.PropTypes.number, // 图片压缩比例 单位：%
    data: React.PropTypes.array, // 初始化数据 其中的每个元素必须是标准化数据格式
    max: React.PropTypes.number, // 最大上传图片数
    maxSize: React.PropTypes.number, // 图片最大体积 单位：KB
    typeArray: React.PropTypes.array, // 支持图片类型数组
};

Uploader.defaultProps = {
    compress: true,
    compressionRatio: 20,
    data: [],
    max: 9,
    maxSize: 5 * 1024, // 5MB
    typeArray: ['jpeg', 'jpg', 'png', 'gif'],
};

export default Uploader
```

完整代码[Github](https://github.com/Aus0049/react-component/blob/master/src/components/DataEntry/Uploader/components/Uploader.js)

## TODO
1. [桌面端采用node.js的fs,mime库上传文件 ](https://www.cnblogs.com/wlink/articles/7792375.html)

## 参考文章
1. [使用 JavaScript File API 实现文件上传](http://www.cnblogs.com/xiaoqian1993/p/5775135.html)
2. [移动端H5实现图片上传的几种方案](https://segmentfault.com/a/1190000010034177) *