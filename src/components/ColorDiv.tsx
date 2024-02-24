interface DivProps {
  width: string;
  bgColor: string;
}
const ColorDiv = ({ bgColor = "violet-100", width = "300px" }: DivProps) => {
  return `
    <div class="w-${width} h-[300px] bg-${bgColor} rounded-full absolute -top-[15px] 
                    filter blur-3xl opacity-20">
        </div>
    `;
};

export default ColorDiv;
