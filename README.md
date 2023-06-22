# Blog_JavaOnly
Blogger Thinh Duy !

==== Clone proejct ====
1. Cd /JavaOnly
2. Terminal: npm install
3. Terminal: npm start  -> Done !!!
==== End clone proejct ====

==== Build proejct ====
( Mặc định đã cài nginx trên server )
1. Cd /JavaOnly
2. Terminal: ng build
3. Terminal: sudo cp -R dist/* /var/www/html/
4. Terminal: sudo nano /etc/nginx/sites-available/default
5. Sửa root /var/www/html; thành root /var/www/html/java-only; để nginx trỏ về index.html của dự án 
6. Terminal: sudo service nginx restart để khởi động lại dịch vụ nginx -> Done !!!
==== End build proejct ====

Done !!