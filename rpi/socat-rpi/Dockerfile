FROM hypriot/rpi-alpine-scratch

RUN apk update &&\
    apk upgrade &&\
    apk add socat &&\
    rm -rf /var/cache/apk/*

ENTRYPOINT ["socat"]