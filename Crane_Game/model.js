

function initModel()
{

 /*점 생성하는 부분*/
 //vertices.concat(이어 붙이길 원하는 list.) 하면 이어붙일 수 있음.
 // 이어 붙이길 원하는 list. 파일에서 export{이름}해주고 위에 처럼 import 하면 된다.
 
    var vertices = [
        vec3(-1.0,0,0),
        vec3(1.0, 0, 0),
        vec3(0, 1, 0)
    ]

    //Crane Steam
    vertices =  vertices + upperCraneSteam + craneSteam + lowerCraneSteam;
    // vertices = vertices + craneTorso + lowerCraneTorso;
    // vertices = vertices + leftCraneUpper + leftCraneMedium + leftCraneLower;
    // vertices = vertices + rightCraneUpper + rightCraneMedium + rightCraneLower;
    

    vertices.concat(head)



    return vertices;

}





// export default {initModel}

/*normal 또한 vertex와 같이 생성하기*/
function initNormal()
{
 
    var normals = [
        
    ]
    normals.concat(normal_head)



    return normals;

}

