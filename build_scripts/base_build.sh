adduser public -D
usermod -aG root public
echo 'public ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/root


apk update && 
apk add --no-cache openrc nginx shadow sudo && 
rc-update add nginx default && 
mkdir -p /usr/main/sample-angular-nest && 
chown public:public /usr/main/sample-angular-nest &&
sudo rm /etc/nginx/http.d/default.conf && 
sudo mkdir -p /var/lib/nginx/tmp /var/log/nginx /var/run/nginx &&
sudo chown -R public:public /var/lib/nginx /var/log/nginx /var/run/nginx && 
sudo chmod -R 777 /var/lib/nginx /var/log/nginx /var/run/nginx