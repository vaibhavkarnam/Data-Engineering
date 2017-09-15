/**
 * Created by vaibhav on 13-09-2017.
 */
var a = [{
  "oid": 1,
  "customer_id": 1,
  "price": 2.5
}, {
  "oid": 2,
  "customer_id": 3,
  "price": 5
}, {
  "oid": 3,
  "customer_id": 3,
  "price": 2
}, {
  "oid": 4,
  "customer_id": 2,
  "price": 2
}, {
  "oid": 5,
  "customer_id": 6,
  "price": 3
}, {
  "oid": 6,
  "customer_id": 5,
  "price": 4
}, {
  "oid": 7,
  "customer_id": 1,
  "price": 10
}];

var b = [{
  "cid": 1,
  "name": "Barry"
}, {
  "cid": 2,
  "name": "Todd"
}, {
  "cid": 3,
  "name": "Steve"
}, {
  "cid": 4,
  "name": "Edward"
}, {
  "cid": 5,
  "name": "Rodney"
}];



function inner_join(arr1, arr2, match1, match2)
{
  var result = _.union(_.map(arr1, function(obj1) 
    {
      var same = _.find(arr2, function(obj2) 
      {
        return obj1[match1] === obj2[match2];
      });
      while (same)
        return _.extend(obj1, same);
    })
  );

  result = result.filter(function(elt) {
    return elt != null;
  });
  
  return result;
}

document.getElementsByTagName('pre')[0].innerHTML = JSON.stringify(
  inner_join(a, b, 'customer_id', 'cid'), null, 2
);
