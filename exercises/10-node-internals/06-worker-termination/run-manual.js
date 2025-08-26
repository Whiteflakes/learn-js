const { runTask } = require('./index');

(async function(){
  console.log('calling success path');
  try{
    const v = await runTask(2, { timeout: 200 });
    console.log('success got', v);
  }catch(e){
    console.error('success path error', e);
  }

  console.log('calling termination path');
  try{
    await runTask(20000, { timeout: 20 });
    console.log('termination path unexpectedly resolved');
  }catch(e){
    console.log('termination path rejected as expected:', e && e.message ? e.message : e);
  }
})();
