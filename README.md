# Updating Base System (Docker CE):
clear && sudo apt-get update && \
  sudo apt-get -y upgrade && \
  sudo apt-get -y autoclean && \
  sudo apt-get -y autoremove

# Build socat container on manager node

clear && docker build -t mattwiater/rpi-socat .

# Test / Update
clear && \
  docker run -it \
    -p 127.0.0.1:2376:2375 \
    -v /var/run/docker.sock:/var/run/docker.sock \
  mattwiater/rpi-socat /bin/ash

# Deploy: traefik.socat.stack.yml via Portainer

Stack as: proxy

View Traefik dashboard at *any* swarm node: http://piarmy01:8080/dashboard/

# Delpoy: test01.service.yml via Portainer

Stack as: test01

Visit any node in swarm: http://piarmy03. Repeated visits will loop through each service task b/c wrr.

# Delpoy: test02.service.yml via Portainer

Stack as: test02

This stack is the same service as test01, but named whoami02, and uses drr istead of the default wrr

Visit any node in swarm: http://piarmy03/test. Repeated visits will bring up "random" services b/c drr.

