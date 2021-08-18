

const initialState={
    products:[
        {id:1,name:'t-shirt summer male',image:'1.jpg',price:400,discount:2,discountPrice:400-2/100*400,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:2,name:'coat winter female',image:'2.jpg',price:800,discount:2,discountPrice:800-2/100*800,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:3,name:'pyjma male',image:'3.jpg',price:600,discount:2,discountPrice:600-2/100*600,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:4,name:'shoes male',image:'4.jpg',price:1000,discount:2,discountPrice:1000-2/100*1000,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:5,name:'skirt summer female',image:'5.jpg',price:400,discount:2,discountPrice:400-2/100*400,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:6,name:'skirt summer female',image:'6.jpg',price:1200,discount:2,discountPrice:1200-2/100*1200,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:7,name:'pyjma summer female',image:'7.jpg',price:200,discount:10,discountPrice:200-10/100*200,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:8,name:'coat winter female',image:'8.jpg',price:4000,discount:20,discountPrice:4000-20/100*4000,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:9,name:'sweater winter female',image:'9.jpg',price:400,discount:2,discountPrice:400-2/100*400,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"},
        {id:10,name:'jacket winter male',image:'10.jpg',price:400,discount:2,discountPrice:400-2/100*400,quantity:1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, omnis nemo consectetur inventore ratione perspiciatis obcaecati, earum nihil, magnam ipsum. Impedit amet tempora quidem laborum, similique at debitis magni?"}
    ],
    product:{}
}

const ProductReducer = (state=initialState,action) => {
    console.log(typeof action.id);
    switch(action.type){
        case"PRODUCT":
        return{...state,product:state.products.find(product=>product.id===parseInt(action.id))}
        default:
            return state;
    }

}

export default ProductReducer;
