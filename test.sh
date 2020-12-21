#! /bin/bash

build_path="./build"
host="10.64.58.62"
devServer="root@$host:/data/incentive/incentive-frontend-fed/"

w1_host="b1.offline.hupu.com"
w1_test_Server="root@$w1_host:/opt/www-data/hoopchina.com.cn/w1/games/static/incentive-frontend-fed/static/"

timestamp=$(date +%s)

echo ">>>>>manage scp to [ $devServer ]<<<<<";

scp -r $build_path/* $devServer




echo ">>>>>manage scp to [ $w1_test_Server ]<<<<<";
scp -r $build_path/static/* $w1_test_Server

