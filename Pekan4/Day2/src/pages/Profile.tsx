import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <Card className="w-[350px] mx-auto p-4 space-y-4">
      <CardHeader>
        <CardTitle>Profil Pengguna</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Input placeholder="Nama Lengkap" />
        <Input placeholder="Email" type="email" />
      </CardContent>

      <CardFooter>
        <Button className="w-full">Simpan Profil</Button>
      </CardFooter>
    </Card>
  );
}
