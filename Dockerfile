FROM node:8.15.0-alpine
RUN mkdir -p /PARTYCANDESKTOP
CMD mkdir /var/log/applogs
CMD chmod +777 /var/log/applogs
WORKDIR /PARTYCANDESKTOP
ADD . /PARTYCANDESKTOP
RUN npm install -g serve
RUN npm rebuild node-sass
RUN npm run build
CMD sh cmd.sh