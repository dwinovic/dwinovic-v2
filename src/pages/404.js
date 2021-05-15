import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="body404">
      <div className="page404">
        <Image src="/image/404.gif" width={800} height={900} />
        <div className="buttonWrapper">
          <div className="buttonBack">
            <Link href="/">
              <a>Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
