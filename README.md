# TEPERA Browser

مشروع ويب بنفس طريقة APKDroid: صفحة الغلاف في `index.html`، التنسيق في `src/styles/app.css`، ومنطق التطبيق في `src/app.js`، مع `manifest.json` وService Worker للأيقونات والتثبيت.

ألوان شعار TS هي نفس ألوان شريط البحث: T أخضر `#34A853` و S أصفر `#FBBC05` على خلفية رمادية.

## التشغيل

```
python3 -m http.server 8080
```

ثم افتح http://localhost:8080

يمكن تثبيته كتطبيق من المتصفح (Add to Home Screen) لأن الملف `manifest.json` والأيقونات جاهزة.
