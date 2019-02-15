FROM alpine:3.7
RUN apk update &&\
    apk upgrade &&\
    apk add ca-certificates &&\
    rm -rf /var/cache/apk/*
ADD https://github.com/containous/traefik/releases/download/v1.7.9/traefik_linux-amd64 /traefik
RUN chmod +x /traefik
EXPOSE 80 8080
ENTRYPOINT ["/traefik"]