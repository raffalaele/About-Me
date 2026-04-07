document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const navbar = document.querySelectorAll('.navbar');
    const cascate = document.querySelectorAll('.cascate');

   if(window.screen.width>1279){
         document.addEventListener('mousemove', e => {
            cursor.style.top = `${e.clientY}px`;
            cursor.style.left = `${e.clientX}px`;
        });
        document.addEventListener('mouseup', () => {
                const cursorColor = '#f0f0f0';
                cursor.style.borderColor = cursorColor;
            });
        document.addEventListener('mousedown', () => {
                console.log('clicked:');
                const clickColor ='#000000';
                cursor.style.borderColor = clickColor;
            });
        cascate.forEach(element => {
            element.addEventListener('mouseover', () => {
                cursor.style.width = '15px';
                cursor.style.height = '15px';
            });
            element.addEventListener('mouseout', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
            });
        });
        navbar.forEach(element => {
            element.addEventListener('mouseover', () => {
                cursor.style.width = '15px';
                cursor.style.height = '15px';
            });
            element.addEventListener('mouseout', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
            });
        });
   }
});