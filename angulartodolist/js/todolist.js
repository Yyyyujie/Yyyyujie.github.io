angular.module("myapp",[])
.controller("ctrl",["$scope","$filter",function($scope,$filter){
    $scope.data=localStorage.message?JSON.parse(localStorage.message):[];
    $scope.currentid=$scope.data[0]?$scope.data[0].id:null;
    $scope.currentArr=$scope.data[getid($scope.currentid)];



    /*查询*/
    $scope.$watch("search", function () {
        var arr=$filter("filter")($scope.data,{title:$scope.search});
        if(arr.length>0){
            $scope.currentid=arr[0].id;
            $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
        }

    })

    //添加列表
    $scope.addlist=function(){
        $scope.show=true;

        var obj={};
        obj.title="新建文件";
        obj.id=setid()
        obj.son=[];
        $scope.data.push(obj);
        $scope.currentid=obj.id;
        $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
        localStorage.message=JSON.stringify($scope.data)

    }
//    删除列表
    $scope.dellist=function(id){
        var index=getid(id);
        var len=$scope.data.length-1;
        if(len==0){
            $scope.currentid=null;
            $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
        }else{
            if(index==len){
                $scope.currentid=$scope.data[len-1].id;
                $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
            }else if(index<len){
                $scope.currentid=$scope.data[index+1].id;
                $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
            }
        }
        $scope.data.splice(index,1);
        localStorage.message=JSON.stringify($scope.data)
    }
//    获得
    $scope.focus=function(id){
        $scope.show=true;

        $scope.currentid=id;
        $scope.currentArr=$scope.currentid?$scope.data[getid($scope.currentid)]:{title:""};
    }
//    失去
    $scope.blur=function(){
        localStorage.message=JSON.stringify($scope.data)

    }

//    内容
    $scope.addcon=function(){
        var son=$scope.currentArr.son;
        var id=son.length>0?son[son.length-1].id+1:1;
        $scope.currentArr.son.push({con:'',id:id});
        localStorage.message=JSON.stringify($scope.data)

    }
    //删除内容
    $scope.delcon=function(id){
        var son=$scope.currentArr.son;
         for(var i=0;i<son.length;i++){
             if(son[i].id==id){
                 son.splice(i,1)
             }
         }
        localStorage.message=JSON.stringify($scope.data)

    }

//    已完成
    $scope.show=true;
    $scope.successdata=localStorage.success?JSON.parse(localStorage.success):[];
    $scope.done=function(id){
        var son=$scope.currentArr.son;
        var title=$scope.currentArr.title;
        for(var i=0;i<son.length;i++){
            if(son[i].id==id){
                var obj=son.splice(i,1)[0];
                obj.parent=title;
                obj.id=setid1();
                $scope.successdata.push(obj)

            }
        }
        localStorage.message=JSON.stringify($scope.data)
        localStorage.success=JSON.stringify($scope.successdata)

    }
//    单击已完成
    $scope.finishw=function(){
        $scope.show=false;

    }
//    删除已完成
    $scope.delfin=function(id){

        var arr=$scope.successdata;
        for(var i=0;i<arr.length;i++){
            if(arr[i].id==id){
                arr.splice(i,1);

            }
        }
        localStorage.success=JSON.stringify($scope.successdata)

    }


//    方法一
    function setid(){
        if($scope.data.length>0){

            return $scope.data[ $scope.data.length-1].id+1;
        }else{
            return 1
        }

    }
    function setid1(){
        if($scope.successdata.length>0){

            return $scope.successdata[ $scope.successdata.length-1].id+1;
        }else{
            return 1
        }

    }
//方法二
    function getid(id){
       for(var i=0;i<$scope.data.length;i++){
           if(id==$scope.data[i].id){
               return i;
           }
       }


    }

}])