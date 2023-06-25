# Blog_JavaOnly
Blogger Thinh Duy !

==== Clone proejct ====
1. Cd /JavaOnly
2. Terminal: npm install
3. Terminal: npm start  -> Done !!!
==== End clone proejct ====


==== Build & Deploy proejct ====
( Mặc định đã cài nginx trên server )
1. Cd /JavaOnly
2. Terminal: ng build
3. Coppy key.pem của server cloud vào thư mục /JavaOnly
4. Terminal: scp -i key.pem -r dist/* root@8.222.200.187:/var/www/html/         (sudo cp -R dist/* /var/www/html/ // local)
5. Terminal: sudo nano /etc/nginx/sites-available/default
6. Sửa dòng root /var/www/html; thành root /var/www/html/java-only; để nginx trỏ về index.html của dự án 
7. Terminal: sudo service nginx restart để khởi động lại dịch vụ nginx -> Done !!!
==== End Build & Deploy proejct ====
