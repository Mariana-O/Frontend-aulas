import React from "react";

interface Props {
    titulo: string
    item: string
    numero?: number
}

function Footer(items: Props) {
    return(
        <div>
            {items.titulo}
            {items.item}
        </div>
    )

}

export default Footer