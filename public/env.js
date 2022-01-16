
// To submit newproject
const submitProject=(project)=>{
  $.ajax({
    url:'/api/projects',
    contentType:'application/jason',
    data:JSON.stringify(project),
    type:'POST',
    success:function(result){
      alert('Project Successfully submitted')
    }
  });
}


const newProject=()=>{
  let name = $('#name').val()
  let title = $('#title').val()
  let video = $('#video').val()
  let image = $('#image').val()
  let description = $('#description').val()
  let project = {name,title,video,image,description}
  console.log(project)
  submitProject(project)
}




const testButtonFunction=()=>{
    alert('Thank you for clicking')
  }
  
  // connect to the socket
  
  let socket = io();
  
  
  socket.on('number', (msg) => {
      console.log('Random number: ' + msg);
  })
  
  console.log('test')
  $(document).ready(function(){
    console.log('Ready')
    
    //bind the button
    $('#testButton').click(testButtonFunction)
  
    //test get call
    $.get('/test?user_name="Fantastic User"',(result)=>{
      console.log(result)
    })
  
  
  })