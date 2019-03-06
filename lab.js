const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]

  const array_list_types = ["a", "b", "c"]

  
  functionPrintDepts(org1_depts, 0, "org1", 0);
  functionPrintDepts(org2_depts, 0, "org2", 0);


  function functionPrintDepts(my_array, index, id, list_index)
  {
      var container = document.getElementById(id);
      if (container.childElementCount == 0)
          container = document.getElementById(id);
      else
        container = document.getElementById(id + (list_index - 1));
    new_ul = null;
    if (my_array && my_array.length != 0)
    {
        var ul = ""
        if (index == 0)
        {
            ul = document.createElement("UL");
            ul.setAttribute("Id", id + list_index);
            container.appendChild(ul);
        }
        else
            ul = document.getElementById(id + list_index);
        var li = document.createElement("LI");
        li.setAttribute("Class", array_list_types[list_index]);
        var text = document.createTextNode(my_array[index].name);
        li.appendChild(text);
        ul.appendChild(li);
                functionPrintDepts(my_array[index].children, 0, id, list_index + 1);
        if (my_array.length > index + 1)
        {
            index++;
            functionPrintDepts(my_array, index, id, list_index);
        }
    }
  }

  example(0);

  function example(number)
  {
    console.log(number);
    if (number < 10)
    {
      number += 1;
      example(number);
    }
  }
