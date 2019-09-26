create database burger_db;

use burgers_db;

create table burgers(
    id int auto_increment,
    burger_name varchar(100),
    devoured boolean default false
    primary key(id)
);

