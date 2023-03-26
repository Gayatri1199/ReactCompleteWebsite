import { useProductContext } from "../context/productcontext";
import styled from "styled-components";
import Product from "./Product";



const FeatureProduct = () => {
    const { isLoading ,featureProducts } = useProductContext();
    console.log(featureProducts);

    if(isLoading){
        return <div>.......Loading</div>
    }

    return (
    <Wrapper>
        <div className="container">
            <h6>Check Now!</h6>
            <h2>Our Feature Services</h2>
            <div className="feature-section">
                {
                    featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

margin:50px 0px;
h6{
    font-size:15px;
    margin-bottom:20px;
    position:relative;

    &:after{
        content:"";
    }
}

h2{font-size:32px;font-weight:600;}
.feature-section{
    display:flex;
    justify-content:space-between;
    margin-top:20px;

    @media screen and (max-width:1260px){
        display:block;
    }


    img{
        max-width:100%;
    }

    .card{
        max-width:300px;
        background:#fff;
        border-radius:10px;
        overflow:hidden;
        transition:0.5s all ease-in-out;

        &:hover{
            transition:0.5s all ease-in-out;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        figcaption{
            background:#6254f38f;
            display:inline-block;
            padding:5px 10px;
            border-radius:5px;
            margin:10px;
            color:#fff;
            text-transform:uppercase;
            font-weight:bold;
            letter-spacing:5px;

        }

        .card-data{
            padding:10px; 
            display:flex;
            align-items:center;
            justify-content:space-between;

            h2{
                font-size:16px;
                text-transform:capitalize;
            }

            .price{
                font-weight:bold;
                color:green;
            }
        }
    }
}
`;

export default FeatureProduct