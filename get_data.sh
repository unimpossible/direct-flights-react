#!/bin/bash
wget -O src/airports.dat https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat
wget -O src/routes.dat https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat
wget -O src/airlines.dat https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat

#remove all quotes
sed -i "" 's/\"//g' src/*.dat
#remove us airways as active airline
sed -i "" '/US Airways/s/,Y/,N/g' src/airlines.dat

sed -i "" '1i\
    airline_id,airline,alias,iata,icaoo,callsign,country,active
' src/airlines.dat
sed -i "" '1i\
    airport_id,name,city,country,iata,icao,lat,lng,altitude,tz,dst,tz_db,type,source
' src/airports.dat
sed -i "" '1i\
    airline,airline_id,airport_src,airport_src_id,airport_dst,airport_dst_id,codeshare,stops,equipment
' src/routes.dat

python csv_to_json.py -i src/airports.dat -o src/airports.json
python csv_to_json.py -i src/airlines.dat -o src/airlines.json
python csv_to_json.py -i src/routes.dat -o src/routes.json

node data_gen_directs.js > src/directs.json

rm src/*.dat
