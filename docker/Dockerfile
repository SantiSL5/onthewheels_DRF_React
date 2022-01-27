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

COPY entrypointreact.sh /entrypointreact.sh
ENTRYPOINT ["/bin/bash", "/entrypointreact.sh"]