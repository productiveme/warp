#!/bin/bash

. bin/activate 
pip install -e git+https://github.com/productiveme/warp.git#egg=warp
pushd js
npm ci
npm run build
popd