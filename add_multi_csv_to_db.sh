# This script will populate a local database, [database_name] with tables
# that contain the geometry information from .csv files stored
# at [PATH_TO_FOLDER]

unset table_array
unset csv_array

for x in $(ls [PATH_TO_FOLDER] | sed -e 's/\..*$//')
do
  table_array+=($x);
done;
for y in $(ls [PATH_TO_FOLDER]);
do
  csv_array+=($y);
done;

for index in ${!table_array[*]}
do
  psql -c "CREATE TABLE ${table_array[$index]} (geom geometry);" [database_name];
  psql -c "COPY ${table_array[$index]} FROM '${csv_array[$index]}' CSV HEADER;" [database_name];
done;
