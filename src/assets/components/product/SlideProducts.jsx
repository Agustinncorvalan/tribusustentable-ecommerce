import Collar from "@/assets/images/Collar.jpg";
import CollarSmall from "@/assets/images/Collar-chico.jpg"
import CollarSmall1 from "@/assets/images/Collar-chico1.jpg"
export default () => {
    return(
        <section className="grid md:grid-cols-2 md:gap-4 md:gap-x-1">
            <div className="col-span-2 object-scale-down h-60 w-60">
                <img src={Collar} alt="" className="aspect-radio [16/12]" />
            </div>
            <img src={CollarSmall} alt="" className="hidden md:block"/>
            <img src={CollarSmall1} alt="" className="hidden md:block"/>
            

        </section>
    )
  
}
