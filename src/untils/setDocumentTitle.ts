const setWebTitle = (title?: string) => {
    document.title = title || 'incentive';
    let iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = '/favicon.ico';
    iframe.onload = () => {
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 9);
    };
    document.body.appendChild(iframe);
  }
  
export default setWebTitle;