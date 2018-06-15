FROM node:8

ARG WORK_DIR=/var/www/

ADD ["./package.json", "/opt"]
ADD ["./package-lock.json", "/opt"]

RUN cd /opt && npm i --ignore-optional
RUN npm i --ignore-optional -g  pm2 rimraf cross-env

WORKDIR $WORK_DIR
ADD . $WORK_DIR
 
CMD ["./run_pm2.sh"]

# Expose SERVER ports
EXPOSE 80 443
