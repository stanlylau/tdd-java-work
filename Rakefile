
ENV['PATH'] = "#{ENV['PATH']}:/Applications/VMware Fusion.app/Contents/Library"

vm_win = '~/Virtual\ Machines/Windows_7.vmwarevm'
auth_args = '-gu cadet -gp Fireba11!'

userdir = ENV['HOMEPATH']
tdd_home = userdir + "/tdd-java"

task :restore_vm_win do
  puts `vmrun revertToSnapshot #{vm_win} Base_Essentials`
end

task :install_tdd do
  mkdir tdd_home
end