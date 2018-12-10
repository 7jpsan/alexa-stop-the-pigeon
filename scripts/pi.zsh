
#!/bin/zsh

function myIPs {
 
   MIPS=($(ifconfig | grep 'inet ' | grep -v '127.' | awk 'BEGIN{FS=OFS=" ";}{print $2}'))
   printf '%s\n' "${MIPS[@]}"
}


function findPi {

   list=($(myIPs))
   
   for i in "${list[@]}"
   do
      RESULT=$(sudo nmap -sP ${i}/24| awk '/^Nmap/{ip=$NF}/B8:27:EB/{print ip}')
      echo "Own IP: ${i}, Pi IP: ${RESULT:-N/A}"
   done
}

findPi
