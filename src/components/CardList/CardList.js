import Card from "../Card/Card"
import "./CardList.css"
const CardList = (props) => {
    return (
        <>
            <div className="CardList">
                {props.monsters.map(monster => <Card key={monster.id} monster={monster}></Card>)}
            </div>
        </>
    )
}

export default CardList