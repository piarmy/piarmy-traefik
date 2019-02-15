# Build

clear && docker build -t mattwiater/rest-server .

# Test / Update
clear && \
  docker run -it \
    -p 9001:9001 \
    mattwiater/rest-server /bin/bash

# Run
clear && \
  docker run -it \
    -p 9001:9001 \
    mattwiater/rest-server