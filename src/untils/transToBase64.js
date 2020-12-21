// 提供截图功能
import html2canvas from 'html2canvas';

const transToBase64 =async (el) => {
    const opts = {
        scale: window.devicePixelRatio, // 默认值是window.devicePixelRatio
        useCORS: true, //允许图片跨域，一定要开启
        backgroundColor: null,
        logging: false
    };

    const canvas = await html2canvas(el, opts);
    const result =  canvas.toDataURL();
    return result;
};

export default transToBase64;

// Q 生成的图片为空data
// A 元素中设置背景图的原因。我将背景图用img 标签代替就好了。

// Q html2canvas 截图跨域

// A useCORS:true 这个参数很重要，没有配置的话，依旧是不能解决问题的；
//   根据现有的解决方案大致有两种：
//   在跨域的服务器上设置header设置为允许跨域请求。 在服务器上设置header设置允许跨域请求（采用nginx做静态资源映射借助代理脚本获得外域图片的 base64 编码后的字符串

// Q 生成的图片模糊不清且有锯齿瑕疵怎么办
// A 使用 scale 属性可以修改渲染时的放大倍数（默认为 1），将其调大可以解决低分辨率设备下生成的图片模糊问题。

// Q 安卓版微信保存图片失败的问题
// A canvas2img默认保存图片的格式为png，而在安卓版微信中所生成的图片尽管能长按唤出保存图片的菜单，但是无法正确保存到本地相册。 解决方案：设置canvas2img的生成图片格式配置项为jpeg即可。