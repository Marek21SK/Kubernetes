Minikube - lokálny klaster, používam Docker na image a cez Docker mám spustený aj Kubernetes (WSL2 v PC) WIN11 

V Dockeri mám 2 kontajneri čo je vlastne ten klaster (ja to tak chápem) Minikube start si to zapínam vo VSku a už potom v príkazovom riadku vykonávam príkazy

V priečinku public mám vlastne tú Javascript aplikáciu + HTML kód (to som mal spraviť niečo proste základné, ja sa mám primárne zamerať na YAML súbory, tak mi školiteľ povedal)

my-app.yaml = moja aplikácia
mysql.yaml = databáza 

mysql-test.yaml = to som sa snažil trošku pre mňa zložitejšiu konfiguráciu rozbehať, ale nepodarilo sa mi to nefunguje PVC a PV

ostatné .yaml súbory sú už len veci čo som sa snažil, ale ďaleko som sa nedostal (nemám nič zložité spraviť mi bolo povedná)

Samotný Ingress mám nainštalovaný ale neiplementoval som to nejako, lebo neviem ako, taktiež HELM by som mal mať nainštalovaný v Minikube a Cert-Manager (snažil som sa spraviť certifikáciu - neúspešne)

HELM ma ešte čaká 
