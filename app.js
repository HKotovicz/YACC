'use strict';



var keywords = ['if', 'for', 'in', 'out']

var symbols = ['<', '>', '!', '=']

function arrayContainsArray (superset, subset) {
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }


function appendType(item, index, arr) {
    if ( $.inArray(item.trim(), keywords) > -1 ) {
        $( ".inner" ).append( " <code style='color:blue;'>"+ item+"</code> " );
    }else if (arrayContainsArray(symbols, item.trim().split(""))) {
        $( ".inner" ).append( " <code style='color:purple;'>"+ item+"</code> " );
      }else if (item.trim().match(/^(\d){3}$/)) {
        $( ".inner" ).append( " <code style='color:green;'>"+ item+"</code> " );
      }else if (item.trim().match(/^([a-z]\d{2})$/)) {
        $( ".inner" ).append( " <code style='color:#87f542;'>"+ item+"</code> " );
      }else {
        $( ".inner" ).append( " <code style='color:red;'>"+ item+"</code> " );
        $( "ul" ).append( "<li> simbolo <b>"+ item+"</b> não identificado</li> " );
      }
  } 






  function runCalc() {
    var string = $( "#fname" ).val()
    $( ".inner" ).empty()
    console.log(calculator.parse(string));
    $( ".inner" ).append( " <code style='color:blue;'>"+ calculator.parse(string)+"</code> " );

  }