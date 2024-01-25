import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import { dataGet } from "../../service/Action/Action";

const ProductView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { products } = useSelector (state => state.DataReducer);
  console.log('Products:', products);

  const productList = Array.isArray(products) ? products : [];

  const handleDelete = (id) => {
    dispatch(dataDelete(id))
  }


  useEffect(() => {
    dispatch(dataGet());
  }, [])

//   return (
//     <Table striped bordered hover size="sm">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Product Images</th>
//           <th>Product Name</th>
//           <th>Product Price</th>
//           <th>Product color</th>
//           <th>Product Categories</th>
//           <th>Update</th>
//           <th>Delet</th>
//         </tr>
//       </thead>
//       <tbody>
//       {productList.length > 0 ? (
//   productList.map((product, index) => (
//     <tr key={index}>
//       <td>{index + 1}</td>
//       <td>{product.images}</td>
//       <td>{product.name}</td>
//       <td>{product.price}</td>
//       <td>{product.color}</td>
//       <td>{product.categories}</td>
//       <td>
//         <Button variant="info">
//           Update
//         </Button>
//       </td>
//       <td>
//         <Button variant="danger" onClick={() => handleDelete(product.id)}>
//           Delete
//         </Button>
//       </td>
//     </tr>
//   ))
// ) : (
//   <tr>
//     <td colSpan="6">No products available</td>
//   </tr>
// )}

//       </tbody>
//     </Table>
//   );


const handelcardclick = () => {
  navigate('/Add');
}

  return(
    <>
      <div className="experts-img-2">
        <img src="../../../../public/experts2.png" alt="experts2" />
      </div>
    <div id="card">
      <div className="container">
        <div className="row pb-5">
          <div className="card-head text-center">
            <h4 className="mt-5">Fresh From Pizzon</h4>
            <h2 className="mt-2">OUR SPECIAL MENU</h2>
          </div>
          {products.map((pro) => {
            return(
              <div className="col-3 mb-2" key={pro.id}>
              <div className="card-contain-main">
                <div className="card-img d-flex justify-content-center mb-3">
                  <a href="#">
                    <img src={pro.images} alt={pro.products} />
                  </a>
                </div>
                <div className="card-contain text-center">
                  <h4>{pro.name}</h4>
                  <p className="mb-2">{pro.categories}</p>
                  <span>${pro.price}</span>
                </div>
                <div className="text-center mt-3">
                  <a href="" className="card-button" key={pro.id} onClick={handelcardclick}>Add to card</a>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
  </div>
  <div className="experts-img-2">
  <img src="../../../../public/experts1.png" alt="experts1" />
</div>
    </>
  )
};

export default ProductView;
