import svgPaths from "./svg-q4umsjtjdf";
import imgImage3 from "./6c9468368cc2baf3fccf383eb020a4c273a1c528.png";

function Heading() {
  return (
    <div className="absolute h-[75.907px] left-[48px] top-[136px] w-[434.4px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[48px] left-0 not-italic text-[32px] text-white top-[-1px] whitespace-nowrap">Reserva Segura</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[192px] left-[66px] top-[195px] w-[397px]" data-name="Heading 2">
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[-18px] not-italic text-[56px] text-white top-0 w-[491px]">
        <p className="leading-[64px] mb-0">Prepare-se para</p>
        <p className="leading-[64px]">o futuro</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[89px] left-[48px] top-[372px] w-[466px]" data-name="Paragraph">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[24px] text-[rgba(255,255,255,0.9)] top-[-28px] w-[466px]">
        <p className="leading-[31px] mb-0">Aprenda a criar cofrinhos personalizados e alcance seus objetivos financeiros</p>
        <p className="leading-[31px]">com facilidade.</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[48px] top-[136px]">
      <Heading />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[691.2px] left-0 top-0 w-[562.4px]" data-name="Container">
      <Group />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[691px] left-0 overflow-clip top-0 w-[1122px]" style={{ backgroundImage: "linear-gradient(-53.1381deg, rgb(149, 179, 135) 30.847%, rgb(97, 140, 120) 61.173%, rgb(202, 217, 150) 91.499%)" }} data-name="Container">
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f4f6] flex-[212_0_0] h-[48px] min-w-px relative rounded-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[106.35px] not-italic text-[#4a5565] text-[16px] text-center top-[11.4px] whitespace-nowrap">Entrar</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#618c78] flex-[212_0_0] h-[48px] min-w-px relative rounded-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[106.01px] not-italic text-[16px] text-center text-white top-[11.4px] whitespace-nowrap">Cadastrar</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#364153] text-[14px] top-[-0.4px] whitespace-nowrap">Nome Completo</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(97,140,120,0.32)] content-stretch flex h-[56px] items-center left-0 overflow-clip pl-[56px] pr-[16px] rounded-[16px] top-0 w-[432px]" data-name="Text Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">João Silva</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[20px] top-[18px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[85px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container7 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#364153] text-[14px] top-[-0.4px] whitespace-nowrap">Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[rgba(97,140,120,0.32)] content-stretch flex h-[56px] items-center left-0 overflow-clip pl-[56px] pr-[16px] rounded-[16px] top-0 w-[432px]" data-name="Email Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">seu.email@exemplo.com</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPaths.p2b3c0500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 6.66345">
            <path d={svgPaths.p38f0cf80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[20px] top-[18px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[85px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container10 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#364153] text-[14px] top-[-0.4px] whitespace-nowrap">Senha</p>
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="absolute bg-[rgba(97,140,120,0.32)] content-stretch flex h-[56px] items-center left-0 overflow-clip pl-[56px] pr-[16px] rounded-[16px] top-0 w-[432px]" data-name="Password Input">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">••••••••</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 10.8333">
            <path d={svgPaths.p22c1500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_29.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.16667">
            <path d={svgPaths.p3e02e700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[20px] top-[18px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <PasswordInput />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[85px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#618c78] h-[56px] relative rounded-[16px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[216.2px] not-italic text-[16px] text-center text-white top-[15.4px] whitespace-nowrap">Criar Conta</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[383px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container9 />
      <Container12 />
      <Button2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[479px] relative shrink-0 w-[432px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[691.2px] items-center justify-center left-[562px] px-[64px] py-[106.1px] rounded-bl-[76px] rounded-tl-[76px] top-0 w-[560px]" data-name="Container">
      <Container3 />
    </div>
  );
}

export default function TelaCadastroDesktop() {
  return (
    <div className="relative size-full" data-name="Tela-Cadastro-Desktop">
      <Container />
      <Container2 />
      <div className="absolute flex h-[273px] items-center justify-center left-[339px] top-[408px] w-[287px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[273px] relative w-[287px]" data-name="image 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[327.92%] left-[-12.08%] max-w-none top-[-78.68%] w-[312.08%]" src={imgImage3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}