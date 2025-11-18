create table a (
  id int primary key,
  name text not null default ''
);

create table b (
  a_id int not null,
  b_id int not null,
  primary key (a_id, b_id)
);
