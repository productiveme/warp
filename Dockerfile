FROM python:3-slim

ARG FLASK_SECRET_KEY

WORKDIR /usr/src/app

RUN pip install --upgrade setuptools
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY warp ./warp
COPY setup.py ./
COPY MANIFEST.in ./
COPY LICENSE ./
RUN python setup.py install \
  && apt update && apt install -y sqlite3

WORKDIR /usr/src/app/build/lib

ENV FLASK_APP=warp
ENV SECRET_KEY=$FLASK_SECRET_KEY

EXPOSE 5000/tcp

# Uncomment below to set up empty db the first time
# RUN ["python", "-m", "flask", "init-db", "-s"]
ENTRYPOINT ["python", "-m", "flask", "run", "-h", "0.0.0.0"]
