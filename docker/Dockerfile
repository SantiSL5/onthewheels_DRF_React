FROM python:3.9 as drf
ENV PYTHONUNBUFFERED=1
WORKDIR /app

RUN adduser drf
RUN usermod -a -G root drf
USER drf

COPY entrypointdrf.sh /entrypointdrf.sh
ENTRYPOINT ["/bin/bash", "/entrypointdrf.sh"]

#########################################################################


FROM node:16.13.0 as react

WORKDIR /app
RUN apt-get update -y
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

COPY entrypointreact.sh /entrypointreact.sh
ENTRYPOINT ["/bin/bash", "/entrypointreact.sh"]