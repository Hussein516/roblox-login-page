document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    // الحصول على القيم المدخلة
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // عرض القيم في الكونسول (لأغراض التطوير فقط)
    console.log('بيانات التسجيل:', {
        username: username,
        password: password
    });
    
    // رسالة للمستخدم
    alert('تم استلام بياناتك. هذا نموذج تجريبي ولا يوجد اتصال بخادم.');
    
    // يمكنك إعادة تعيين النموذج إذا أردت
    // this.reset();
});
