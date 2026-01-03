import { X } from "lucide-react";
import { Button } from "./ui/button";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
          <h2 className="text-white">Kullanım Koşulları</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-1">
            <X className="size-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Genel Hükümler</h3>
              <p className="text-gray-700">
                Ayzek Ajans'a başvuru yaparak, aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşullar, başvuru sürecinden hizmet alımına kadar tüm aşamaları kapsar.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">2. Başvuru Süreci</h3>
              <p className="text-gray-700">
                Başvuru formunda verdiğiniz tüm bilgilerin doğru ve güncel olması gerekmektedir. Yanlış veya eksik bilgi vermek başvurunuzun reddedilmesine neden olabilir.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">3. Hizmet Kapsamı</h3>
              <p className="text-gray-700">
                Ayzek Ajans, modelling, oyunculuk, tanıtım ve organizasyon hizmetleri sunmaktadır. Başvurunuz değerlendirildikten sonra uygun pozisyonlar için sizinle iletişime geçilecektir.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">4. Fikri Mülkiyet Hakları</h3>
              <p className="text-gray-700">
                Ajansımız tarafından çekilen fotoğraf, video ve diğer görsel materyallerin telif hakları Ayzek Ajans'a aittir. Bu materyaller, önceden yazılı izin alınmadan kullanılamaz.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">5. Sorumluluklar</h3>
              <p className="text-gray-700">
                Başvuru sahipleri, ajans tarafından organize edilen etkinlik ve çekimlere zamanında katılmakla yükümlüdür. Ajans, üçüncü şahısların neden olduğu zararlardan sorumlu tutulamaz.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">6. Sözleşme Feshi</h3>
              <p className="text-gray-700">
                Taraflar, iş birliğini yazılı bildiriyle sonlandırabilir. Fesih durumunda mevcut projeler tamamlanmadan tarafların sorumluluğu devam eder.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">7. Değişiklikler</h3>
              <p className="text-gray-700">
                Ayzek Ajans, kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Güncel koşullar web sitemizde yayınlanacaktır.
              </p>
            </section>
          </div>
        </div>

        <div className="p-4 border-t">
          <Button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            Kapat
          </Button>
        </div>
      </div>
    </div>
  );
}