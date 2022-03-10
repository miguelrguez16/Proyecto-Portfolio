import java.util.Scanner;
public class raizDeUnNumero{

    /**
     * Raiz de un numero sin utilizar 
     * Math.sqrt
     * @param args
     */
    public static void main(String[]args){
        Scanner s = new Scanner(System.in);
        int p = s.nextInt();

        int x[]={2,9,16,25,36};
        for (int i : x) {
            double y = sq(i/2,0,i);
            System.out.println("(Normal)\tRaiz de "+i + " es: " + y);
            System.out.println("(Math.sqrt)\tRaiz de "+i + " es: " + Math.sqrt(i));
            
        }
    }

    public static double sq(double aprox, double last, double a){
        double next = (aprox+a/aprox)/2;
        if (Math.abs(last-next) < 1e-2){
            return next;
        }

        return sq(next, aprox,a);
    }
}