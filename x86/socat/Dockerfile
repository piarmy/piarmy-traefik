FROM alpine:3.7

RUN apk update &&\
    apk upgrade &&\
    apk add socat &&\
    rm -rf /var/cache/apk/*

ENTRYPOINT ["socat"]