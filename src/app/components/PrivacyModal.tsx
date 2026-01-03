import { X } from "lucide-react";
import { Button } from "./ui/button";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
          <h2 className="text-white">Gizlilik Politikası</h2>
          <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-1">
            <X className="size-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Veri Toplama</h3>
              <p className="text-gray-700">
                Ayzek Ajans, başvuru formunda talep edilen kişisel bilgilerinizi (ad, soyad, e-posta, telefon, yaş, şehir) yalnızca ajans hizmetleri kapsamında toplar ve işler.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">2. Verilerin Kullanım Amacı</h3>
              <p className="text-gray-700">
                Toplanan veriler şu amaçlarla kullanılır:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Başvurunuzun değerlendirilmesi</li>
                <li>Uygun proje ve pozisyonlar için iletişime geçilmesi</li>
                <li>Sözleşme ve iş birliği süreçlerinin yürütülmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">3. Veri Güvenliği</h3>
              <p className="text-gray-700">
                Kişisel bilgileriniz, yetkisiz erişime karşı güvenli sunucularda saklanır. Verileriniz, SSL şifreleme teknolojisi ile korunmaktadır.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">4. Veri Paylaşımı</h3>
              <p className="text-gray-700">
                Kişisel verileriniz, açık rızanız olmadan üçüncü şahıslarla paylaşılmaz. Yalnızca yasal zorunluluklar veya proje gereklilikleri doğrultusunda gerekli kişi ve kurumlarla paylaşılabilir.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">5. Çerezler (Cookies)</h3>
              <p className="text-gray-700">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerez teknolojisi kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">6. Kullanıcı Hakları (KVKK)</h3>
              <p className="text-gray-700">
                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>Düzeltme veya silme talep etme</li>
                <li>Veri işlemeye itiraz etme haklarına sahipsiniz</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold mb-2">7. Veri Saklama Süresi</h3>
              <p className="text-gray-700">
                Kişisel verileriniz, hizmet süresi boyunca ve yasal saklama yükümlülükleri doğrultusunda saklanır. Silme talebinde bulunabilirsiniz.
              </p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">8. İletişim</h3>
              <p className="text-gray-700">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz: info@ayzekajans.com
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