class Parent{
    greet(){
        console.log('hello my name is system sylvere barinda ');
    }
}
class child extends Parent{
    greet(){
        super.greet()
        console.log('hello I am the child of system sylvere barinda');
    }
}
const c = new child();
c.greet()