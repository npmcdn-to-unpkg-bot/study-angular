app.directive("uiAccordions", function(){
  return {
    controller: function($scope, $element, $attrs){
      var accordions = [];

      this.registerAccordion = function(accordion){
        accordions.push(accordion);
      }

      this.closeAll = function(){
        accordions.forEach(function(accordion){
          accordion.isOpened = false;
        });
      }
    }
  }
});
app.directive("uiAccordion", function(){
  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    scope:{
      title:"@"
    },
    require: "^uiAccordions",
    link: function(scope, element, attrs, ctrl){
      ctrl.registerAccordion(scope);
      scope.open = function(){
        if(scope.isOpened === true){
          ctrl.closeAll();
        }else{
          ctrl.closeAll();
          scope.isOpened = true;
        }
      }
    }
  }
});
