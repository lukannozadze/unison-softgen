import Image from "next/image";

import { Icons } from "../shared/Icons";

export default function MobileFooter() {
  return (
    <footer className="w-full bg-gray-100 px-9 py-6">
      <div className="gird-cols-2 grid-areas-footer container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center">
          <Icons.logo />
        </div>

        <div className="grid grid-cols-2 text-base text-[#707070]">
          <div className="flex flex-col space-y-2">
            <span>ჩვენს შესახებ</span>
            <span>პარტნიორები</span>
          </div>
          <span>კარიერა</span>
        </div>

        <div className="grid text-base text-[#707070]">
          <p className="mb-2 font-bold">ინფორმაცია</p>
          <div className="grid grid-cols-2">
            <ul className="space-y-2">
              <li>სიახლეები</li>
              <li>საინფორმაციო ფურცელი</li>
            </ul>
            <ul className="space-y-2">
              <li>ხელშეკრულებები</li>
              <li>სამედიცინო პროვაიდერები</li>
            </ul>
          </div>
        </div>

        <div className="text-base text-[#707070]">
          <p className="mb-2 font-bold">დახმარება</p>
          <div className="grid grid-cols-2">
            <ul className="space-y-2">
              <li>კონტაქტი</li>
              <li>მომხმარებლის ხმა</li>
            </ul>
            <ul className="space-y-2">
              <li>მონაცემთა დაცვა</li>
              <li>ხშირად დასმული კითხვები</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-10 lg:mt-0">
          <Icons.appStore />
          <Icons.playStore />
        </div>

        <div className="flex items-center gap-10 text-base text-[#707070]">
          <ul className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <li>Facebook</li>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <li>YouTube</li>
            </div>
          </ul>

          <ul className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <li>Instagram</li>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="h-[30px] w-[30px] object-contain"
              />
              <li>LinkedIn</li>
            </div>
          </ul>
        </div>

        <p className="text-sm text-[#707070]">უნისონი © ყველა უფლება დაცულია, 2021</p>
      </div>
    </footer>
  );
}
